const icons = document.querySelectorAll(".icon");
const iconsDiv = document.querySelectorAll(".icons");
/* #region Fade from left animation */
let icons_counter = 0;
icons.forEach((e) => {
	setTimeout(
		() => {
			e.classList.add("showFadeFromLeft");
		},
		// Add an incremental timeout for each icon
		++icons_counter * 250
	);
});
/* #endregion */
