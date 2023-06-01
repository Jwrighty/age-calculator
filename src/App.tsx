import { DurationObjectUnits } from "luxon";
import { useState } from "react";

import Form from "./components/form";
import { usePrevious } from "./hooks";
import Counter from "./components/counter";

function App() {
  const [age, setAge] = useState<DurationObjectUnits>({
    days: undefined,
    months: undefined,
    years: undefined,
  });

  const prevAge = usePrevious(age);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-slate-100 p-8">
      <div className="flex w-full max-w-2xl flex-col gap-8 rounded-3xl rounded-br-[124px] bg-white px-8 py-12 sm:px-12">
        <Form setAge={setAge} />
        <div className="flex flex-col gap-2 text-5xl font-extrabold italic sm:text-7xl">
          <p>
            <Counter from={prevAge?.years || 0} to={age.years} />
            years
          </p>
          <p>
            <Counter from={prevAge?.months || 0} to={age.months} />
            months
          </p>
          <p>
            <Counter from={prevAge?.days || 0} to={age.days} />
            days
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
