const categories = {
    selector: '#faq_menu',
    gen: 'General Questions',
    lic: 'Licensing Questions'
}

const faqData = {
    icon: 'fas fa-angle-down',
    faq: [
        {
            question: 'What kind of automations will I be getting?',
            answer: 'At Jet Cube Automation we have the knowledge and experience to provide our clients with the ideal solution. We are experts in Zapier, Airtable, and Make automations, as well as many others. With our help, your automations will work for you in the most effective way possible',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'Who is Jet Cube Automation Services for?',
            answer: 'If you\'re looking for the perfect way to automate tasks in your business, look no further than Jet Cube Automation. Our goal is for our clients to get the most out of their automations by working with experts, who have a deep understanding of their niche, and can provide automations that our clients didn’t even know they desperately needed',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'Working with different freelances can be frustrating and inconsistent. How will working with Jet Cube be different?',
            answer: 'It doesn\'t have to be this way. With Automation as a Subscription Service, we\'ll take care of all of your automation needs so that you can focus on growing your business instead of constantly being pulled in every direction. We take the time to learn about you and your business and stick around to see through every automation we create for you',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'How would the Jet Cube Automation Subscription Service create reliability and consistency in my business?',
            answer: 'With us by your side, you can get rid of the boring, repetitive, time-consuming tasks that are threatening to take over your life. Instead of working with a random online contractor that doesn’t know you, your business or your niche, work with a dedicated team of experts that knows the ins & outs of your business to provide you with the automations you desperately need. These automations will walk hand in hand with almost every workflow you currently have in your business and would reliably help create high quality outputs',
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