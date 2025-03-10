export interface MainCommandResponse {
  id: number;
  name: string
  params: string | null;
  format: string | null;
  data_size: number;
  total_size: number;
}

export interface MainCommandListResponse {
  data: MainCommandResponse[]
}

export interface CommandResponse {
  id: number
  command_type: number
  status: number
  params: string | null
  created_on: string
  updated_on: string
}

export interface CommandListResponse {
  data: CommandResponse[]
}
