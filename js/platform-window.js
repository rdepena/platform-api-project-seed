export const CONTAINER_ID = 'layout-container';
window.addEventListener('DOMContentLoaded', () => {
    // Before .50 AI version this may throw...
    fin.Platform.Layout.init({containerId: CONTAINER_ID});
});

const myLayoutContainer = document.getElementById(CONTAINER_ID);
myLayoutContainer.addEventListener('tab-created', function(event) {
    const { tabSelector } = event.detail;
    const tabElement = document.getElementById(tabSelector);
    const titleElement = tabElement.getElementsByClassName("lm_title")[0];
    titleElement.className += "sparks dotline-extrathick";
});