// Copyright (C) 2021 - present Juergen Zimmermann, Hochschule Karlsruhe
// Copyright (C) 2024 - present Philip Neuffer
// Copyright (C) 2024 - present Felix Jaeger
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeycloakModule } from '../security/keycloak/keycloak.module.js';
import { UniversitaetWriteController } from './controller/universitaaet-write.controller.js';
import { UniversitaetGetController } from './controller/universitaet-get.controller.js';
import { entities } from './entity/entities.js';
import { UniversitaetMutationResolver } from './resolver/universitaet-mutation.resolver.js';
import { UniversitaetQueryResolver } from './resolver/universitaet-query.resolver.js';
import { QueryBuilder } from './service/query-builder.js';
import { UniversitaetReadService } from './service/universitaet-read.service.js';
import { UniversitaetWriteService } from './service/universitaet-write.service.js';

/**
 * Das Modul besteht aus Controller- und Service-Klassen für die Verwaltung von
 * Universitaeten.
 * @packageDocumentation
 */

/**
 * Die dekorierte Modul-Klasse mit Controller- und Service-Klassen sowie der
 * Funktionalität für TypeORM.
 */
@Module({
    imports: [KeycloakModule, TypeOrmModule.forFeature(entities)],
    controllers: [UniversitaetGetController, UniversitaetWriteController],
    providers: [
        UniversitaetReadService,
        UniversitaetWriteService,
        UniversitaetQueryResolver,
        UniversitaetMutationResolver,
        QueryBuilder,
    ],
    exports: [UniversitaetReadService, UniversitaetWriteService],
})
export class UniversitaetModule {}
