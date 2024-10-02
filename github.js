class Github {
  constructor() {
    this.client_id = "Ov23li7U6iMn4nP4Uo8z";
    this.client_secret = "1218d1c8e4110b06c2559ae9125a5f6fe3d9b7ef";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoReaponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoReaponse.json();

    return {
      profile,
      repos,
    };
  }
}

const github1 = new Github();
const github2 = new Github();
const github3 = new Github();
