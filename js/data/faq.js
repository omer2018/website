const categories = {
    selector: '#faq_menu',
    gen: 'General Questions',
    lic: 'Licensing Questions'
}

const faqData = {
    icon: 'fas fa-angle-down',
    faq: [
        {
            question: 'What is an AI chatbot?',
            answer: 'An AI chatbot is an artificial intelligence program that is designed to simulate conversation with human users. Our chatbots are programmed to understand natural language and can help businesses automate customer communication and lead generation',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'How does an AI chatbot work?',
            answer: 'Our AI chatbots are powered by machine learning algorithms that analyze customer data and use natural language processing to simulate conversation with users. They can be programmed to answer questions, provide product information, nurture leads, book apoitments, and even qualify your leads for you',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'How can an AI chatbot benefit my business?',
            answer: 'Our AI chatbots can help businesses save time and resources by automating routine tasks and providing personalized customer experiences. They can also improve customer satisfaction and loyalty by providing 24/7 support and anticipating customer needs',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'Can I customize my AI chatbot?',
            answer: 'Yes! Our chatbots are highly customizable and can be tailored to exactly match the nature of how you are currently communicating with customers and leads. You can work with our team to create a chatbot that\'s uniquely tailored to your business needs through a structured and proven process',
            category: 'gen',
            active: true,
            homePage: false
        },
        {
            question: 'Can I integrate my AI chatbot with other platforms?',
            answer: 'Yes! Our chatbots can be integrated with a variety of different platforms, including social media, messaging apps, and email. This means that you can communicate with your customers wherever they are',
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