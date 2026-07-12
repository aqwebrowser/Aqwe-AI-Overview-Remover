// AI Overview Remover for AqweBrowser
// Safer detector version

(function () {
    "use strict";

    function removeAIOverview() {

        const headings = document.querySelectorAll("h1, h2, h3, div[role='heading']");

        headings.forEach(heading => {

            const text = heading.innerText?.trim().toLowerCase();

            if (text === "ai overview") {

                let card = heading;

                // Go upward until we find a reasonable Google result card
                for (let i = 0; i < 5; i++) {
                    if (card.parentElement) {
                        card = card.parentElement;
                    }
                }

                // Only hide if it is actually an AI Overview block
                if (
                    card.innerText &&
                    card.innerText.toLowerCase().includes("ai overview")
                ) {
                    card.style.display = "none";
                }
            }
        });
    }


    // Run multiple times because Google loads AI Overview later
    setTimeout(removeAIOverview, 1000);
    setTimeout(removeAIOverview, 3000);
    setTimeout(removeAIOverview, 5000);


    // Watch dynamic changes
    const observer = new MutationObserver(() => {
        removeAIOverview();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();