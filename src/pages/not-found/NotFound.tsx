import { translation_keys } from "@/constants";

function NotFound() {
  return (
    <div>
      <h1>{translation_keys.not_found_title}</h1>
      <p>{translation_keys.not_found_message}</p>
    </div>
  );
}

export default NotFound;
