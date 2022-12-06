const categories = {
    selector: '#faq_menu',
    gen: 'General Questions',
    lic: 'Licensing Questions'
}

const faqData = {
    icon: 'fas fa-angle-down',
    faq: [
        {
            question: 'More specifically, what kind of media is generated?',
            answer: 'There are many different types of campaigns, the right one usually depends on how your current sales pipeline looks like and how it’s intended to evolve in the future. Our campaigns include: emails with embedded product demo images, landing pages that feature generated images or video, emails featuring links to generated video demos, and more recently- generated PDF documents that serve as lead magnets',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'How could personalized media improve customer communication?',
            answer: 'Customers respond better to information when it’s tailored specifically to them. To visualize the benefits of a product to a prospective customer, sales teams typically conduct a live demo. Those must be booked in advance, cause friction on the part of the prospect and can be expensive to fulfill. This is where media generation comes in. Jet Cube creates a short but impactful demo instantly, tailored to the specific prospect based on information collected on the prospect, on the spot or in advance',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'How can I understand whether my business needs personalized media creation?',
            answer: 'Schedule a free consultation call so we could understand together whether personalized media creation can be applied to your business to deliver a significant ROI',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'What’s needed to launch my personalized media generation campaign?',
            answer: 'During the onboarding process, our team will gain a better understanding of the current state of your sales pipeline. After which, we will craft your media generation campaign for you- a process that usually requires no more than two 40-minute meetings on your behalf, over the course of 14 days',
            category: 'gen',
            active: true,
            homePage: false
        }
    ]
}

const homeFAQ = {
    selector: '#faq_homepage',
    order: ['gen'],
    ...faqData
}
const faqFAQ = {
    selector: '#faq_faq',
    order: ['gen', 'lic'],
    ...faqData
}

export { categories, homeFAQ, faqFAQ }