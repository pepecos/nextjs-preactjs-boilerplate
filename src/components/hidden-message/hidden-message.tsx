import React, { useState } from "react";

export const HiddenMessage = ({ children }: { children: any }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  );
};
