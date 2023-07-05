export const dynamicImageImport = (path, name, extension) => {
  try {
    const iconItem = name.toLowerCase();
    const iconUrl = new URL(`/src/assets/${path}/${iconItem}.${extension}`, import.meta.url);
    return iconUrl;
  } catch (err) {
    console.log(`< iconName Error > :  ${err}`);
    return false;
  }
};
