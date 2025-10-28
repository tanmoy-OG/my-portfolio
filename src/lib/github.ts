export async function getGithubContributions(username: string): Promise<number> {
  try {
    const link = `https://github-contributions-api.deno.dev/${username}.json`;
    const res = await fetch(link, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) return 0;

    const data: any = await res.json();
    // Extract totalContributions from the JSON
    if (data && typeof data.totalContributions === 'number') {
      return data.totalContributions;
    }
    return 0;
  } catch {
    return 0;
  }
}