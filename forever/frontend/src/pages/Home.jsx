import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js'></script>
<script>
  window.addEventListener("DOMContentLoaded", function() {
    window.AgentInitializer.init({
      agentRenderURL: "https://agent.jotform.com/0195c76e35ae7f649148f3eb09f6de642434",
      rootId: "JotformAgent-0195c76e35ae7f649148f3eb09f6de642434",
      formID: "0195c76e35ae7f649148f3eb09f6de642434",
      queryParams: ["skipWelcome=1", "maximizable=1"],
      domain: "https://www.jotform.com",
      isDraggable: false,
      background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
      buttonBackgroundColor: "#0066C3",
      buttonIconColor: "#FFFFFF",
      variant: false,
      customizations: {
        "greeting": "Yes",
        "greetingMessage": "Hi! How can I assist you?",
        "openByDefault": "No",
        "pulse": "Yes",
        "position": "right",
        "autoOpenChatIn": "0"
      },
      isVoice: undefined
    });
  });
</script>
  )
}

export default Home
