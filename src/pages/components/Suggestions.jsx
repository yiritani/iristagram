import * as React from 'react';
import minifaker from "minifaker";
import {Suggestion} from "@/pages/components/Suggestion";

export function Suggestions() {
  const [suggestions, setSuggestions] = React.useState([])
  React.useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      id: i,
      username: minifaker.username({locale: 'en'}).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <>
      <div className={'flex flex-col space-y-2 mt-4 ml-10'}>
        {suggestions.map(profile => (
          <Suggestion
            key={profile.id}
            username={profile.username}
            jobTitle={profile.jobTitle}
          />
        ))}

      </div>
    </>
  );
}