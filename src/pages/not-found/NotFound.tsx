import { translation_keys } from "@/constants";

function NotFound() {
  return (
    <div>
      <h2>{translation_keys.not_found_title}</h2>
      <p>{translation_keys.not_found_message}</p>
    </div>
  );
}

export default NotFound;
