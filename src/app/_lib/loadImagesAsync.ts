/**
 * Load image files asynchronously into the browser cache.
 * @param sources - image sources.
 */
const loadImagesAsync = async (sources: string[]): Promise<void> => {
  const loadImage = (source: string): Promise<void> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = reject;
      image.src = source;
    });

  await Promise.all(sources.map((source) => loadImage(source)));
  return;
};

export default loadImagesAsync;
