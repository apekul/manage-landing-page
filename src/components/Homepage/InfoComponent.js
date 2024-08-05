import React from "react";

const infoItems = [
  {
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    title: "Advanced built-in reports",
    description:
      "Set internal delivery priorities and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

function InfoComponent() {
  return (
    <article className="py-20 flex justify-between">
      <section className="w-1/2">
        <header>
          <h1 className="text-5xl font-[700] text-dark-blue">
            What's different about <br /> Manage?
          </h1>
          <p className="py-10 text-xl text-dark-grayish-blue font-[500]">
            Manage provides all the functions your <br /> team needs, without
            the complexity. Our <br /> software is tailor-made for modern
            digital <br /> product teams.
          </p>
        </header>
      </section>
      <section className="w-1/2">
        <ul>
          {infoItems.map((item, index) => (
            <li key={index} className="flex items-start gap-5">
              <p className="bg-bright-red text-white px-6 py-2 rounded-full">
                0{index + 1}
              </p>
              <div className="pb-10">
                <h2 className="text-xl font-[700] text-dark-blue">
                  {item.title}
                </h2>
                <p className="py-5 text-xl text-dark-grayish-blue font-[500]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default InfoComponent;
