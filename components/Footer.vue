<template>
    <div id="footer" class="bg-josa-grey w-full py-20">
        <div class="container text-center md:text-right">
            <div class="flex justify-between flex-wrap flex-col md:flex-row">
                <h3>منصة الطوارئ الرقمية</h3>
                <div id="social-menu">
                    <a href="https://www.instagram.com/jordanopensource/" target="_blank">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']" />
                    </a>
                    <a href="https://twitter.com/jo_osa" target="_blank">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']" />
                    </a>
                    <a href="https://web.facebook.com/jordanopensource/" target="_blank">
                        <font-awesome-icon class="fa-icon" :icon="['fab', 'facebook']" />
                    </a>
                </div>
            </div>
            <div id="footer-menu">
                <a href="#get-help">احصل على مساعدة</a>
                <a href="https://www.jordanopensource.org" target="_blank">موقع جوسا الرئيسي</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h3 {
        @apply inline-block mb-5;
    }

    a {
        @apply inline-block font-theMixArab text-josa-blue-oxfordBlue text-base
    }

    a:hover {
        opacity: 0.7;
    }

    #social-menu {
        @apply inline-block mb-5
    }

    #social-menu a {
        margin-left: 50px;
    }

    #social-menu a:last-child {
        margin-left: 0;
    }

    #footer-menu a {
        width: 100%;
        margin-bottom: 12px;
    }
</style>
