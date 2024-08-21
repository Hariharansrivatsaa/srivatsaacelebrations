export function GetInitials(name) {
    if (!name) {
      return "";
    }
    name = name.trim();
    if (name && /\s/.test(name)) {
      return name
        .split(/\s/)
        .map((part) => part.substring(0, 1).toUpperCase())
        .filter((v) => !!v)
        .slice(0, 2)
        .join("")
        .toUpperCase();
    } else if (name) {
      return name.substring(0, 2).toUpperCase();
    } else {
      return "";
    }
  }
