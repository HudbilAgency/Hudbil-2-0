import React, { useState } from "react";
import { messaging } from "../firebase";
import { getToken } from 'firebase/messaging';

const PopUp = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        const popup = document.getElementById("popup-container");
        if (popup) {
            popup.classList.add("fade-out");
            setTimeout(() => {
                setIsVisible(false);
            }, 500);
        }
    };

    if (!isVisible) return null;

    async function requestPermission(action) {
        if (action === "granted") {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
                const token = await getToken(messaging, {
                    vapidKey: "BBwTjx9MN408kbDq1N9xtkgO6VonMhrKgFJuXjSlHfrr3VawLe8Y7rSm7uEgGes_qB9YOc5knmE7KIbPp0jA_sQ",
                });
                console.log("Notification token:", token);
            } else {
                alert("Permission denied despite accepting.");
            }
        } else if (action === "denied") {
            alert("Permission denied.");
        } else {
            console.log("No action taken.");
        }
    }

    return (
        <div
            id="popup-container"
            style={{
                background: "linear-gradient(180deg, #7811A5, #2E16BB)",
            }}
            className="fixed bottom-0 left-0 w-full z-[1010] hidden transition-opacity duration-500"
        >
            <div className="relative flex lg:flex-row flex-col justify-between h-full">
                <div className="py-10 px-4 lg:py-10 lg:px-10 lg:w-2/3 xl:w-3/4">
                    <h1 className="text-base lg:text-lg footer-text uppercase font-black mb-2 text-white">
                        Personalize your experience
                    </h1>
                    <p className="text-xs sm:text-base footer-text opacity-90 text-white">
                        We use functional cookies to make the website work properly, analytical cookies to measure your behavior, and marketing cookies for ads and content personalization. We collect data on how you use our website to make it easier to use and to tailor communication in advertisements, on our website, or apps. By clicking accept, you agree to this. More information? Read our{" "}
                        <a href="/cookie-policy" className="underline">
                            cookie policy
                        </a>
                        .
                    </p>
                </div>
                <div className="px-8 py-4 lg:px-8 lg:py-8 flex lg:flex-row flex-col lg:max-h-24 gap-4 items-center my-auto lg:w-1/3 xl:w-1/4">
                    <button
                        className="flex-1 notify hover:bg-white/10 hover:text-white transition-all duration-500 ease-in-out outline-1 bg-white outline-offset-1 outline outline-gray-50 relative py-[8.9px] px-20 lg:px-5"
                        onClick={() => {
                            requestPermission("granted");
                            handleClose();
                        }}
                    >
                        Accept All
                    </button>
                    <button
                        className="overflow-hidden notify flex-1 btn relative button text-white hover:bg-white/10 text-center px-[5rem] lg:px-5 py-3 transition-all duration-500 ease-in-out"
                        onClick={() => {
                            requestPermission("denied");
                            handleClose();
                        }}
                    >
                        Reject All
                    </button>
                </div>
                <button
                    className="absolute top-0 right-0 mt-3 mr-3"
                    type="button"
                    onClick={handleClose}
                >
                    <span className="sr-only">Close popup</span>
                    <span className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            viewBox="0 0 8 8"
                            width="10"
                            height="10"
                        >
                            <path d="M2,8H0L3,4,0,0H2L4,2.67,6,0H8L5,4,8,8H6L4,5.33Z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default PopUp;
