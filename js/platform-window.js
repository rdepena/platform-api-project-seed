export const CONTAINER_ID = 'layout-container';
window.addEventListener('DOMContentLoaded', () => {
    // Before .50 AI version this may throw...
    fin.Platform.Layout.init({containerId: CONTAINER_ID});
});

const myLayoutContainer = document.getElementById(CONTAINER_ID);
myLayoutContainer.addEventListener('tab-created', async (event) => {
    const { tabSelector, uuid, name } = event.detail;
    const targetView = fin.View.wrapSync({ uuid, name });
    const viewDetails = await targetView.getOptions();
   
    //restrict this logic to openfin views
    if (viewDetails.url.search("openfin")) {
        const tabElement = document.getElementById(tabSelector);
        const titleElement = tabElement.getElementsByClassName("lm_title")[0];
        titleElement.className += " sparks dotline-extrathick";
    }
});