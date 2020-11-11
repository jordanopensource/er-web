<template>
  <div id="get-help" class="text-center pb-24 bg-josa-blue-veryDark w-full mt-0">
    <div id="josa-platforms" class="container mt-0">
      <div class="w-full inline-block my-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto mt-0">
          <ChatCard :name="chatCard.name" :buttonText="chatCard.buttonText" :title="chatCard.title"
            :description="chatCard.description" :iconName="chatCard.iconName" v-once class="contact-card " />
          <PhoneCard :name="phoneCard.name" :buttonText="phoneCard.buttonText" :title="phoneCard.title"
            :description="phoneCard.description" :iconName="phoneCard.iconName" :phone="phoneCard.phone" v-once
            class="contact-card" />
          <EmailCard :name="emailCard.name" :buttonText="emailCard.buttonText" :title="emailCard.title"
            :description="emailCard.description" :iconName="emailCard.iconName" :email="emailCard.email" v-once
            class="contact-card" />
        </div>
      </div>
      <p class="font-light text-base text-gray-500 leading-7 md:leading-9 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64 ">
        {{ note1 }}</p>
      <p class="font-light text-base text-gray-500 leading-7 md:leading-9 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64">
        {{ note2 }}</p>
    </div>
  </div>
</template>

<script>
  import ChatCard from '~/components/contact-cards/ChatCard';
  import EmailCard from '~/components/contact-cards/EmailCard';
  import PhoneCard from '~/components/contact-cards/PhoneCard';

  export default {
    components: {
      ChatCard,
      EmailCard,
      PhoneCard
    },
    data() {
      return {
        note1: '* إذا كنت متردداً ، يرجى مكالمتنا عبر رقم الطوارئ',
        note2: '** ساعات العمل لدينا من 9 صباحًا إلى 9 مساءً بتوقيت الأردن',
        mainTitle: 'احصل على مساعدة الآن',
        chatCard: {
          name: "chat",
          title: 'مساعدة منتظمة',
          buttonText: 'دردشة مباشرة',
          iconName: "comment-dots",
          description: [
            'الإبلاغ عن حسابات مزيفة',
            'الثغرات والبرامج الخبيثة',
            'إخفاء الهوية والحجب',
            'الخصوصية عبر الإنترنت',
            'الأمن على مواقع التواصل الاجتماعي',
            'سلامة الأجهزة الإلكتروني'
          ],
        },
        emailCard: {
          name: "email",
          title: 'استشارات عامة',
          buttonText: "البريد الالكتروني",
          iconName: "envelope",
          email: "er@jordanopensource.org",
          description: [
            'حماية من البرامج الخبيثة',
            'الاتصالات الآمنة',
            'تخزين البيانات ومسحها بالطرق الآمنة',
            'أمان مواقع التواصل الاجتماعي',
            'مشاكل التعطيل المقصود للإنترنت',
            'لحماية المواقع من الهجمات'
          ],
        },
        phoneCard: {
          name: "phone",
          title: 'حالات الطوارئ',
          buttonText: "الهاتف الخلوي",
          iconName: "phone-alt",
          phone: "077 070 0099",
          description: [
            'الابتزاز',
            'التصيد',
            'اختراق الحسابات واسترجاعها',
            'انتحال  للشخصية',
            'حل الهجمات الرقمية DDOS',
            'فيديوهات مفبركة'
          ]
        },
      }
    }
  }

</script>

