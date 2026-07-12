function removeAI() {
    // Example selectors (these change often)
    document.querySelectorAll('[data-attrid="AI_OVERVIEW"]').forEach(e => e.remove());

    document.querySelectorAll('*').forEach(el => {
        if (el.textContent === "AI Mode") {
            el.remove();
        }
    });
}

removeAI();

new MutationObserver(removeAI).observe(document.body, {
    childList: true,
    subtree: true
});