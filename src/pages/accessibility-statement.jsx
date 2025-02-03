import React from "react";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";

const AccessState = () => {
    return (
        <>
        <CommonPageHero title={"Accessibility Statement"} />

    <div className="container mx-auto p-6">
    <p className="mb-4">Stars and Stripes Automotive, LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

    <h3 className="text-xl font-semibold mb-4">Measures to Support Accessibility</h3>
    <p className="mb-4">Stars and Stripes Automotive, LLC takes the following measures to ensure accessibility of our website:</p>
    <ul className="list-disc pl-6 mb-4">
        <li>Include accessibility as part of our mission statement.</li>
        <li>Integrate accessibility into our procurement practices.</li>
        <li>Provide continual accessibility training for our staff.</li>
        <li>Assign clear accessibility goals and responsibilities.</li>
        <li>Employ formal accessibility quality assurance methods.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-4">Conformance Status</h3>
    <p className="mb-4">The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>

    <h3 className="text-xl font-semibold mb-4">Feedback</h3>
    <p className="mb-4">We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on our site:</p>
    <ul className="mb-4">
        <li><strong>Phone:</strong> (659) 305-8483</li>
        <li><strong>Email:</strong> starsnstripesautomotive@gmail.com</li>
        <li><strong>Location:</strong> 301 4th Street, Bessemer, AL 35020</li>
        <li><strong>Calendar:</strong> Tues - Fri: 8AM - 5PM</li>
    </ul>

    <h3 className="text-xl font-semibold mb-4">Compatibility with Browsers and Assistive Technology</h3>
    <p className="mb-4">Our website is designed to be compatible with the following assistive technologies:</p>
    <p className="mb-4">Our website is designed to be compatible with recent versions of major web browsers like Chrome, Firefox, Safari, and Edge. It is not compatible with browsers older than 3 major versions or mobile operating systems older than 5 years.</p>

    <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
    <p className="mb-4">Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
    <ul className="list-disc pl-6 mb-4">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h3 className="text-xl font-semibold mb-4">Limitations and Alternatives</h3>
    <p className="mb-4">Despite our best efforts to ensure accessibility of our website, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>

    <h4 className="text-lg font-semibold mb-4">Known limitations:</h4>
    <p className="mb-4">Certain video content lacks captions, potentially making it difficult for users with hearing impairments to fully access the information.</p>
    <h4 className="text-lg font-semibold mb-4">Alternatives:</h4>
    <p className="mb-4">We are actively working to add captions to all video content. In the meantime, please contact us for alternative formats.</p>

    <h3 className="text-xl font-semibold mb-4">Instructions on how to report issues</h3>
    <p className="mb-4">Please email us at starsnstripesautomotive@gmail.com or call us at (659) 305-8483 to report any accessibility issues you encounter. Your feedback helps us improve our site for everyone.</p>

    <h3 className="text-xl font-semibold mb-4">Assessment Approach</h3>
    <p className="mb-4">Stars and Stripes Automotive, LLC assessed the accessibility of our website by the following approaches:</p>
    <ul className="list-disc pl-6 mb-4">
        <li><strong>Self-evaluation:</strong> The site was last evaluated on 02/03/2025.</li>
        <li><strong>External evaluation:</strong> We engaged with Accessible Web Inc., a consultancy specializing in web accessibility, to ensure our compliance with WCAG 2.1 guidelines.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-4">Formal Approval of This Accessibility Statement</h3>
    <p className="mb-4">This Accessibility Statement is approved by:</p>
    <ul className="mb-4">
        <li><strong>Stars and Stripes Automotive, LLC</strong></li>
        <li>Elias Putt | Owner of Stars and Stripes Automotive</li>
        <li><strong>Date:</strong> 02/03/2025</li>
    </ul>

    <h3 className="text-xl font-semibold mb-4">Formal Complaints</h3>
    <p className="mb-4">We aim to respond to accessibility feedback within 3-7 business days and to propose a solution within 30 business days. If you are not satisfied with our response to your complaint, you can escalate it to our complaints handling department or regulatory body using the contact details given above.</p>
</div>


        </>
    );
};

export default AccessState;