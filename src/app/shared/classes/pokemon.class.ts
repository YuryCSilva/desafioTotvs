import { BaseClass, IBaseClassType } from "./base.class";

export class Pokemon {
    private abilities!: Ability[];
    private base_experience!: number;
    private height!: number;
    private id!: number;
    private name!: string;
    private sprites!: Sprites | null;
    private types!: Type[];
    private weight!: number;

    constructor(data: PokemonTypes) {
        this.mapData(data);
    }

    mapData(data: PokemonTypes) {
        this.abilities = data.abilities ? data.abilities.map((ability) => new Ability(ability)) : [];
        this.base_experience = data.base_experience ?? 0;
        this.height = data.height ?? 0;
        this.id = data.id ?? null;
        this.name = data.name ?? "";
        this.sprites = data.sprites ? new Sprites(data.sprites) : null;
        this.types = data.types ? data.types.map((type) => new Type(type)) : [];
        this.weight = data.weight ?? 0;
    }

    getDefaultImageUrl(): string {
        return this.sprites?.getDefaultSprite() ?? 'https://cdn.icon-icons.com/icons2/1898/PNG/512/pokemon_121114.png';
    }

    getTypesNames(): string[] {
        return this.types.map((type) => type.getType().getName());
    }

    getHeightInMeters(): number {
        return this.height / 10;
    }

    getWeightInKilograms(): number {
        return this.weight / 10;
    }

    getAllImagesAvaible(): string[] {
        return this.sprites?.getAllSpritesAvaible() ?? [];
    }

    getAbilities(): Ability[] {
        return this.abilities;
    }

    getBaseExperience(): number {
        return this.base_experience;
    }

    getHeight(): number {
        return this.height;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getSprites(): Sprites | null {
        return this.sprites;
    }

    getTypes(): Type[] {
        return this.types;
    }

    getWeight(): number {
        return this.weight;
    }

    setAbilities(abilities: IAbility[]): void {
        this.abilities = abilities ? abilities.map((ability) => new Ability(ability)) : [];
    }

    setBaseExperience(base_experience: number): void {
        this.base_experience = base_experience ?? 0;
    }

    setHeight(height: number): void {
        this.height = height ?? 0;
    }

    setId(id: number): void {
        this.id = id ?? null;
    }

    setName(name: string): void {
        this.name = name ?? "";
    }

    setSprites(sprites: ISprites | null): void {
        this.sprites = sprites ? new Sprites(sprites) : null;
    }

    setTypes(types: IType[]): void {
        this.types = types ? types.map((type) => new Type(type)) : [];
    }

    setWeight(weight: number): void {
        this.weight = weight ?? 0;
    }
}

class Ability {
    private ability!: BaseClass;

    constructor(data: IAbility) {	
        this.ability = new BaseClass(data.ability);
    }

    getAbility(): BaseClass {
        return this.ability;
    }

    setAbility(data: IAbility): void {
        this.ability = new BaseClass(data.ability);
    }
}

class Sprites {
    private back_default!: string | null;
    private back_female!: string | null;
    private back_shiny!: string | null;
    private back_shiny_female!: string | null;
    private front_default!: string | null;
    private front_female!: string | null;
    private front_shiny!: string | null;
    private front_shiny_female!: string | null;
    private other!: {
        dream_world: {
            front_default: string | null;
        },
        home: {
            front_default: string | null;
        },
        ['official-artwork']: {
            front_default: string | null;
        }
    }

    constructor(data: PokemonTypes['sprites']) {
        this.back_default = data.back_default;
        this.back_female = data.back_female;
        this.back_shiny = data.back_shiny;
        this.back_shiny_female = data.back_shiny_female;
        this.front_default = data.front_default;
        this.front_female = data.front_female;
        this.front_shiny = data.front_shiny;
        this.front_shiny_female = data.front_shiny_female;
        this.other = data.other;
    }

    getDefaultSprite(): string | null {
        if (this.other.home?.front_default) return this.other.home.front_default;

        if (this.other['official-artwork']?.front_default) return this.other['official-artwork'].front_default

        return null;
    }

    getAllSpritesAvaible() {
        const images: any[] = [];
        if (this.front_default) images.push(this.front_default);
        if (this.back_default) images.push(this.back_default);
        if (this.front_shiny) images.push(this.front_shiny);
        if (this.back_shiny) images.push(this.back_shiny);
        if (this.other.dream_world?.front_default) images.push(this.other.dream_world.front_default);
        if (this.other['official-artwork']?.front_default) images.push(this.other['official-artwork'].front_default);
        return images;
    }

    getBackDefault(): string | null {
        return this.back_default;
    }

    getBackFemale(): string | null {
        return this.back_female;
    }

    getBackShiny(): string | null {
        return this.back_shiny;
    }

    getBackShinyFemale(): string | null {
        return this.back_shiny_female;
    }

    getFrontDefault(): string | null {
        return this.front_default;
    }

    getFrontFemale(): string | null {
        return this.front_female;
    }

    getFrontShiny(): string | null {
        return this.front_shiny;
    }

    getFrontShinyFemale(): string | null {
        return this.front_shiny_female;
    }

    getOther(): {
        dream_world: {
            front_default: string | null;
        },
        home: {
            front_default: string | null;
        },
        ['official-artwork']: {
            front_default: string | null;
        }
    } {
        return this.other;
    }

    setBackDefault(back_default: string | null): void {
        this.back_default = back_default;
    }

    setBackFemale(back_female: string | null): void {
        this.back_female = back_female;
    }

    setBackShiny(back_shiny: string | null): void {
        this.back_shiny = back_shiny;
    }

    setBackShinyFemale(back_shiny_female: string | null): void {
        this.back_shiny_female = back_shiny_female;
    }

    setFrontDefault(front_default: string | null): void {
        this.front_default = front_default;
    }

    setFrontFemale(front_female: string | null): void {
        this.front_female = front_female;
    }

    setFrontShiny(front_shiny: string | null): void {
        this.front_shiny = front_shiny;
    }

    setFrontShinyFemale(front_shiny_female: string | null): void {
        this.front_shiny_female = front_shiny_female;
    }

    setOther(other: {
        dream_world: {
            front_default: string | null;
        },
        home: {
            front_default: string | null;
        },
        ['official-artwork']: {
            front_default: string | null;
        }
    }): void {
        this.other = other;
    }
}

class Type {
    private slot!: number;
    private type!: BaseClass;

    constructor(data: IType) {
        this.slot = data.slot;
        this.type = new BaseClass(data.type);
    }

    getSlot(): number {
        return this.slot;
    }

    getType(): BaseClass {
        return this.type;
    }

    setSlot(slot: number): void {
        this.slot = slot;
    }

    setType(type: BaseClass): void {
        this.type = type;
    }
}

export type PokemonTypes = {
    abilities: IAbility[],
    base_experience: number,
    height: number,
    id: number,
    name: string,
    sprites: ISprites
    types: IType[],
    weight: number
}

interface IAbility {
    ability: IBaseClassType,
}

interface ISprites {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
    other: {
        dream_world: {
            front_default: string | null
        },
        home: {
            front_default: string | null
        },
        ['official-artwork']: {
            front_default: string | null
        }
    }
}

interface IType {
    slot: number, 
    type: IBaseClassType
}