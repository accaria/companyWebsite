import axios from "axios";
import { TeamList } from "@/interface/team.interface";

export async function getTeamList(count=20): Promise<TeamList[]> {
  const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
  return response.data.results;
} 