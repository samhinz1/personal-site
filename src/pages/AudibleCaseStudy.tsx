import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CaseStudyLayout from '../components/CaseStudyLayout';

const AudibleCaseStudy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState('');

  return (
    <CaseStudyLayout
      title="Case Study #3"
      summary="New AI feature to combine AI text-to-speech technology with audiobooks, giving listeners the freedom to choose their perfect narrator."
      tags={["Feature Request", "User Research", "AI Technology"]}
      imageUrl="https://cdn.brandfetch.io/idT82q9yNb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
      caseStudyId={3}
    >
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-rich-black">Introduction</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Audible has transformed the way we consume books, but the traditional one-narrator-per-book model has limitations. What if listeners could choose their preferred voice for any book, whether it's their favorite actor, a comforting voice they connect with, or a voice that better matches the book's character?
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          This case study explores how AI-powered voice synthesis could revolutionize the audiobook experience by allowing listeners to select from a diverse library of high-quality AI narrators, each bringing their unique style and characteristics to the story.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-rich-black">The Problem</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Traditional audiobooks are limited by the need to record each book with a single narrator, which can be costly, time-consuming, and restricting for listeners. This model means many books never get recorded, and listeners are bound to a single interpretation of the text, even if the narrator's style doesn't resonate with them.
        </p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-rich-black">Key Issues</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Limited narrator options for each book</li>
          <li>High production costs limiting available titles</li>
          <li>One-size-fits-all approach to narration</li>
          <li>Long production times for new releases</li>
          <li>Narrator availability constraints</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-rich-black">User Research</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          I conducted user research with Audible users to understand their preferences and pain points with current audiobook solutions. Our study deliberately cast a wide net, focusing on users who had experienced at least one audiobook. The aim was twofold: first, to identify pain points with current technology that could be addressed through AI narration, and second, to explore opportunities for both market expansion (converting users who had tried audiobooks but discontinued) and delivering enhanced value to existing customers through new technology.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="border rounded-lg">
            <button 
              onClick={() => setExpandedSection(expandedSection === 'survey' ? '' : 'survey')}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <h3 className="text-2xl font-bold text-rich-black">Survey Questions</h3>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`transform transition-transform duration-300 ${
                  expandedSection === 'survey' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ${
              expandedSection === 'survey' ? 'max-h-[2000px] py-4' : 'max-h-0'
            }`}>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Have you ever listened to an audiobook? If yes, when was the last time?</li>
                <li>How many audiobooks have you listened to in the past year?</li>
                <li>What platforms or services have you used to listen to audiobooks?</li>
                <li>Do you currently have an active audiobook subscription?</li>
                <li>Tell me about the last time you chose an audiobook over reading the physical book. What influenced that decision?</li>
                <li>In what situations do you typically listen to audiobooks?</li>
                <li>How do you usually discover new audiobooks to listen to?</li>
                <li>What made you start listening to audiobooks in the first place?</li>
                <li>For users who stopped: What made you stop using audiobooks?</li>
                <li>Tell me about a time when you really enjoyed a narrator's performance. What made it special?</li>
                <li>Have you ever stopped listening to an audiobook because of the narrator? What happened?</li>
                <li>How do you typically preview a narrator's voice before committing to an audiobook?</li>
                <li>Tell me about a book where you felt the narrator didn't match the content. What was off about it?</li>
                <li>Do you have any favorite narrators? What makes them your favorite?</li>
                <li>What books have you wanted to listen to but couldn't find in audio format?</li>
                <li>Tell me about your biggest frustrations with audiobook listening.</li>
                <li>What makes you decide to return or stop listening to an audiobook?</li>
                <li>How do you handle books where you don't enjoy the narrator's voice?</li>
                <li>What would make you listen to more audiobooks?</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-rich-black">Key Findings</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>76% would try different narrators for favorite books</li>
            <li>82% want voices matching character demographics</li>
            <li>65% have skipped books due to narrator mismatch</li>
            <li>89% interested in celebrity AI voice options</li>
            <li>71% would pay premium for narrator choice</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-rich-black">The Solution</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our solution leverages cutting-edge AI voice synthesis to create a library of high-quality narrators that users can choose from. With recent advances in AI and text-to-speech technologies, narration voices are often indistinguishable from real voice actors. An effective AI narration tool directly addresses key user needs identified in our research such as trying different narrators for their favorite books, differentiation of character voices within a single book, and increasing appeal to cater to audiences that may have different audio/voice preferences such as language, genders, speeds and accents.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Implementation of this solution is particularly feasible given Amazon's existing technological advantage through Amazon Polly. This in-house text-to-speech technology, with its advanced neural capabilities and established voice library, provides the foundation for rapid development and scalable deployment that is a clear advantage compared to many other services. 
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-rich-black">Feature Development</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 1 | Smart Text Processing Engine</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Intelligent text-to-script conversion system</li>
                  <li>Support for multiple ebook formats (EPUB, MOBI, AZW)</li>
                  <li>Natural language processing for context and emotion</li>
                  <li>Character dialogue detection and attribution</li>
                  <li>Real-time streaming optimization</li>
                </ul>
              </div>
              <a 
                href="https://artwo.atlassian.net/wiki/external/YzlkOWJhNjkwMzkxNDcxNmIxMTYxNWE5MDYxNTE1ZWQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
              >
                Text Processing PRD
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 2 | Voice Selection & Preview</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Interactive voice preview system</li>
                  <li>Real-time voice switching during playback</li>
                  <li>Customizable playback speed controls</li>
                  <li>Voice quality rating and feedback</li>
                  <li>Personalized voice recommendations</li>
                </ul>
              </div>
              <a 
                href="https://artwo.atlassian.net/wiki/external/ZGFjZTVhODllNDRlNDI5Yzg4YzUxNzBhY2JkYWFjZjc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
              >
                Voice Selection PRD
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 3 | Advanced Narration Settings</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Multi-language support and switching</li>
                  <li>Character voice customization</li>
                  <li>Default voice preferences</li>
                  <li>Voice profile management</li>
                  <li>Cross-device settings sync</li>
                </ul>
              </div>
              <a 
                href="https://artwo.atlassian.net/wiki/external/ZjdkY2ZlNmUyZTdhNDMxNzg1NDNiMDEwYmViYmNkY2Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
              >
                Advanced Features PRD
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default AudibleCaseStudy; 