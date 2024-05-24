async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Valdir-coelho-jr/baseportfolio2024/master/assets/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
