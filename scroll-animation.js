(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  const TOTAL_FRAMES = 211;
  const canvas = document.getElementById('animation-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

  const images = new Array(TOTAL_FRAMES);
  let targetFrame = 0;
  let currentFrame = 0;
  let lastRenderedIndex = -1;
  let isAnimating = false;
  let needForceRedraw = false;

  function getFrameSrc(index) {
    const frameNum = String(index + 1).padStart(4, '0');
    return `frames/frame_${frameNum}.jpg`;
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    needForceRedraw = true;
    renderFrame(Math.round(currentFrame));
  }

  function renderFrame(index) {
    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
    const img = getLoadedImage(clampedIndex);

    if (!img) return;
    if (clampedIndex === lastRenderedIndex && !needForceRedraw) return;

    needForceRedraw = false;
    lastRenderedIndex = clampedIndex;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const drawX = (canvasWidth - drawWidth) * 0.5;
    const drawY = (canvasHeight - drawHeight) * 0.5;

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

  function getLoadedImage(targetIdx) {
    if (images[targetIdx] && images[targetIdx].complete && images[targetIdx].naturalWidth > 0) {
      return images[targetIdx];
    }

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIdx - offset;
      if (prev >= 0 && images[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
        return images[prev];
      }
      const next = targetIdx + offset;
      if (next < TOTAL_FRAMES && images[next] && images[next].complete && images[next].naturalWidth > 0) {
        return images[next];
      }
    }
    return null;
  }

  function tick() {
    const delta = targetFrame - currentFrame;

    if (Math.abs(delta) < 0.004) {
      currentFrame = targetFrame;
      renderFrame(Math.round(currentFrame));
      isAnimating = false;
      return;
    }

    const factor = Math.min(0.24, 0.12 + Math.abs(delta) * 0.002);
    currentFrame += delta * factor;

    renderFrame(Math.round(currentFrame));
    requestAnimationFrame(tick);
  }

  function startAnimation() {
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(tick);
    }
  }

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

    targetFrame = progress * (TOTAL_FRAMES - 1);
    startAnimation();
  }

  function preloadImages() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);

      img.onload = () => {
        images[i] = img;
        const curIdx = Math.round(currentFrame);
        if (i === curIdx || lastRenderedIndex === -1) {
          needForceRedraw = true;
          renderFrame(curIdx);
        }
      };

      if (img.decode) {
        img.decode().then(() => {
          images[i] = img;
        }).catch(() => {});
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    resizeCanvas();
    onScroll();
  });

  // Observe page height changes as dynamic tabs or catalog filters load
  const resizeObserver = new ResizeObserver(() => {
    onScroll();
  });
  resizeObserver.observe(document.body);

  resizeCanvas();
  preloadImages();
  onScroll();
})();
