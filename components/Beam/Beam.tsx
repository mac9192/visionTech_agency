import React from "react";
import Image from "next/image";
import { TracingBeam } from "../Beam/tracing-beam";

export function TracingBeamDemo() {
  const processSteps = [
    {
      title: "Initial Consultation",
      description: (
        <>
          <p>
            Our process begins with an initial consultation to understand your
            needs, goals, and vision for your project. This helps us tailor our
            approach to best suit your requirements.
          </p>
          <p>
            During this consultation, we will discuss the scope of the project,
            timelines, budget, and any specific features or functionalities
            you are looking to incorporate.
          </p>
        </>
      ),
      badge: "Consultation",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Design and Development",
      description: (
        <>
          <p>
            Once we have a clear understanding of your requirements, our team
            will begin the design and development phase. This involves creating
            wireframes, mockups, and prototypes to visualize the final product.
          </p>
          <p>
            We will work closely with you to iterate on the designs and ensure
            they align with your vision. Once the designs are approved, we will
            proceed with the development, keeping you updated throughout the
            process.
          </p>
        </>
      ),
      badge: "Design & Development",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Delivery and Support",
      description: (
        <>
          <p>
            After the development phase is complete, we will deliver the final
            product to you. We will provide support and assistance to ensure a
            smooth transition and address any issues that may arise.
          </p>
          <p>
            Our support does not end with the delivery. We are here to help you
            with any maintenance, updates, or enhancements you may need in the
            future to keep your website or application running smoothly.
          </p>
        </>
      ),
      badge: "Delivery & Support",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Maintenance and Updates",
      description: (
        <>
          <p>
            Once your website or application is live, we offer ongoing
            maintenance and support services. This includes regular updates,
            security patches, and performance optimizations to keep your
            platform running smoothly.
          </p>
          <p>
            Our team is available to address any issues or enhancements you may
            need, ensuring your digital presence remains up-to-date and
            competitive.
          </p>
        </>
      ),
      badge: "Maintenance",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=1950&h=1950",
    },
  ];


  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {processSteps.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4 text-white">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert text-white">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="step image"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
