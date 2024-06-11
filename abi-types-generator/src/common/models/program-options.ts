export interface ProgramOptions {
  command: any;
  subcommands: any[];
  options: { [key: string]: string };
}
