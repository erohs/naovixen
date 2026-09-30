import type { IProjectRepository } from '@naovixen/cms';

import { ServerFunctionProjectRepository } from '../server-function-project-repository/ServerFunctionProjectRepository';

export const projectRepository: IProjectRepository = new ServerFunctionProjectRepository();
