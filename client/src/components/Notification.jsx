import React from "react";
import avatar from "../assets/images/maleavatar.png"
function Notification() {
    return (
        <div class="w-full h-auto relative">
    <div class="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
        <div class="w-full flex items-center justify-between">
            <span class="font-medium text-sm">New Notification</span>
            <button class="-mr-1 bg-slate-800 hover:bg-slate-700/70 text-slate-400 hover:text-slate-200 h-5 w-5 rounded-full flex justify-center items-center">
                <svg class="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
            </button>
        </div>
        <div class="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
            <div class="relative flex flex-shrink-0 items-end">
                <img class="h-16 w-16 rounded-full" src={avatar} alt="Avatar" />
                <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
            </div>
            <div class="ml-3.5">
                <span class="font-semibold tracking-tight text-xs">John Doe</span>
                <span class="text-xs leading-none opacity-50">reacted to your comment:</span>
                <p class="text-xs leading-4 pt-2 italic opacity-70">"This is the comment..."</p>
                <span class="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span>
            </div>
        </div>
    </div>
</div>
    )
}

export default Notification;