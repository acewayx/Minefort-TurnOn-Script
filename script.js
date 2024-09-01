// Function to simulate a click on the button
function clickButton() {
    // Find the button with the specific class and text
    const buttons = document.querySelectorAll('button.inline-flex.flex-1.items-center.rounded-md.border-2.border-minefort-700.bg-gradient-to-t.from-minefort-400\\/20.via-minefort-700\\/20.to-zinc-950.px-4.py-2.text-sm.font-medium.text-minefort-500.ring-minefort-400\\/10.focus\\:outline-none');
    buttons.forEach(button => {
        if (button.textContent.includes('Wake up server')) {
            button.click();
        }
    });
}

// Set an interval to click the button every 2 seconds
const intervalId = setInterval(clickButton, 2000);

// To stop the interval, you can run the following line in the console:
// clearInterval(intervalId);