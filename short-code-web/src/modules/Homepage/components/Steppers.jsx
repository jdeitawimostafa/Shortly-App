export default function Stepper() {
  return (
    <div className="stepper-container">
        {/* <div> */}
      <div className="step-1">
        <div className="brand-svg-circle">
          <img src="/assets/icons/icon-brand-recognition.svg" alt="brand" />
        </div>
        <p className="brand-title">Brand Recognition</p>
        <p className="brand-quote">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in you content
        </p>
        </div>
        {/* <div className="after"></div> */}
      {/* </div> */}

      <div className="step-2">
        <div className="brand-svg-circle">
          <img src="/assets/icons/icon-detailed-records.svg" alt="brand" />
        </div>
        <p className="brand-title">Detailed Records</p>
        <p className="brand-quote">
          Gain insights into who is clicking your links. Knowing when and where people engage with your content helps infarm better decisions.
        </p>
      </div>
      <div className="step-3">
        <div className="brand-svg-circle">
          <img src="/assets/icons/icon-fully-customizable.svg" alt="brand" />
        </div>
        <p className="brand-title">Fully Customizable</p>
        <p className="brand-quote">
          improve brand awareness and content discoverability through customizable links, supercharging audience engagement. 
        </p>
      </div>
    </div>
  );
}
