function removeAIOverview() {
    const selectors = [
        // Google AI Overview containers
        '[data-async-context*="ai_overview"]',
        '[data-attrid*="AI"]',
        '[jsname="N760b"]',
        '.GcKpu',
        '.A6K0A',
        '.E2ShMd'
    ];

    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.remove();
        });
    });

    // Backup: remove sections containing "AI Overview" text
    document.querySelectorAll("div").forEach(div => {
        const text = div.innerText?.trim();

        if (text === "AI Overview" || text?.startsWith("AI Overview")) {
            const parent = div.closest("div");
            if (parent) {
                parent.remove();
            }
        }
    });
}

// Run when page loads
removeAIOverview();

// Keep watching for Google loading AI Overview dynamically
const observer = new MutationObserver(() => {
    removeAIOverview();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});