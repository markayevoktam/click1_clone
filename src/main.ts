import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  document.addEventListener("DOMContentLoaded", () => {
    const menuItems: NodeListOf<HTMLLIElement> = document.querySelectorAll(".menu-item");
    const contentItems: NodeListOf<HTMLDivElement> = document.querySelectorAll(".content-item");

    function showContent(sectionId: string): void {
        // Barcha contentlarni yashirish
        contentItems.forEach(item => item.classList.remove("active"));

        // Tanlangan contentni ko‘rsatish
        const activeContent = document.getElementById(sectionId);
        if (activeContent) {
            activeContent.classList.add("active");
        }
    }

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            if (targetId) {
                showContent(targetId);
            }
        });
    });
});
