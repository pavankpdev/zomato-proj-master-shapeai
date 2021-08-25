import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function AddressList(props) {
  const [selected, setSelected] = useState(props.address[0]);

  return (
    <div className="w-full">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {props.address.map((item) => (
              <RadioGroup.Option
                key={item.name}
                value={item.name}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-zomato-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-zomato-100 bg-opacity-75 text-zomato-600"
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-zomato-600" : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-zomato-500" : "text-gray-500"
                            }`}
                          >
                            <address>{item.address}</address>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-zomato-900">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#700d16" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
