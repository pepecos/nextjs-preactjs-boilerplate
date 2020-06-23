import * as React from "preact/compat";

import { render, fireEvent } from "@testing-library/preact";

import { HiddenMessage } from "./hidden-message";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";

  const { queryByText, getByLabelText, getByText } = render(
    <HiddenMessage>{testMessage}</HiddenMessage>
  );

  expect(queryByText(testMessage)).toBeNull();

  fireEvent.click(getByLabelText(/show/i));

  expect(getByText(testMessage)).toBeInTheDocument();
});
