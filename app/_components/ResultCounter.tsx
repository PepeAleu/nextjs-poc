"use client";

import { pluralize } from "../_utils/intl";

export default function ResultCounter({
  counter,
}: {
  readonly counter: number;
}) {
  const resultLabel = pluralize(counter, "RESULT", "RESULTS");

  return (
    <div className="mt-2 text-xs font-medium">
      {counter} {resultLabel}
    </div>
  );
}
