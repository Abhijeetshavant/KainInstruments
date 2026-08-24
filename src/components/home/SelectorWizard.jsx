import React, { useState } from "react";
import { ChevronRight, CheckCircle } from "lucide-react";

const SelectorWizard = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    application: "",
    medium: "",
    environment: "",
  });

  const steps = [
    {
      id: 1,
      title: "Select Application",
      options: ["Pressure", "Temperature", "Flow", "Level", "Control"],
    },
    {
      id: 2,
      title: "Select Medium",
      options: ["Liquid", "Gas", "Steam", "Slurry", "Powder"],
    },
    {
      id: 3,
      title: "Select Environment",
      options: ["Indoor", "Outdoor", "Harsh", "Explosive", "Clean"],
    },
  ];

  const handleSelect = (value) => {
    const key = ["application", "medium", "environment"][step - 1];
    setSelection({ ...selection, [key]: value });
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Show result
      alert("Product recommendation will appear here!");
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm">SMART SELECTOR</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Find the Right
            <span className="gradient-text block">
              Instrument in 10 Seconds
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-dark-200 rounded-2xl border border-dark-300 p-6 md:p-8 reveal">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-colors ${
                      i + 1 <= step
                        ? "bg-primary text-white"
                        : "bg-dark-300 text-gray-500"
                    }`}
                  >
                    {i + 1 < step ? <CheckCircle className="w-5 h-5" /> : s.id}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 hidden sm:block">
                    {s.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      i + 1 < step ? "bg-primary" : "bg-dark-300"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Current Step */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">
              {steps[step - 1].title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {steps[step - 1].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="p-3 bg-dark-300 rounded-lg hover:bg-primary/20 border border-transparent hover:border-primary/50 transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setStep(1);
                setSelection({ application: "", medium: "", environment: "" });
              }}
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectorWizard;
