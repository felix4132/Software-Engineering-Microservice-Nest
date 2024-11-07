// Copyright (C) 2021 - present Juergen Zimmermann, Hochschule Karlsruhe
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

// FIXME: Wenn DB steht fehlende Imports ergänzen
import { Module } from '@nestjs/common';
import { UniversitaetGetController } from './controller/universitaet-get.controller.js';
import { UniversitaetReadService } from './service/universitaet-read.service.js';

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
    imports: [],
    controllers: [UniversitaetGetController],
    // Provider sind z.B. Service-Klassen fuer DI
    providers: [UniversitaetReadService],
    // Export der Provider fuer DI in anderen Modulen
    exports: [UniversitaetReadService],
})
export class UniversitaetModule {}
