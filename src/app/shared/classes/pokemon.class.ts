import { BaseClass } from "./base.class";

export class Pokemon {
    private abilities!: Ability[];
    private base_experience!: number;
    private cries!: Cries | null;
    private forms!: Form[];
    private height!: number;
    private id!: number;
    private is_default!: boolean;
    private name!: string;
    private order!: number;
    private moves!: Move[];
    private species!: Specie | null;
    private sprites!: Sprites | null;
    private stats!: Stats[];
    private types!: Type[];
    private weight!: number;

    constructor(data: typeof Pokemon.prototype) {
        this.mapData(data);
    }

    mapData(data: typeof Pokemon.prototype) {
        this.abilities = data.abilities ? data.abilities.map((ability) => new Ability(ability)) : [];
        this.base_experience = data.base_experience ?? 0;
        this.cries = data.cries ?? null;
        this.forms = data.forms ? data.forms.map((form) => new Form(form)) : [];
        this.height = data.height ?? 0;
        this.id = data.id ?? null;
        this.is_default = data.is_default ?? false;
        this.name = data.name ?? "";
        this.order = data.order ?? null;
        this.moves = data.moves ? data.moves.map((move) => new Move(move)) : [];
        this.species = data.species ? new Specie(data.species) : null;
        this.sprites = data.sprites ? new Sprites(data.sprites) : null;
        this.stats = data.stats ? data.stats.map((stat) => new Stats(stat)) : [];
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

    getCries(): Cries | null {
        return this.cries;
    }

    getForms(): Form[] {
        return this.forms;
    }

    getHeight(): number {
        return this.height;
    }

    getId(): number {
        return this.id;
    }

    getIsDefault(): boolean {
        return this.is_default;
    }

    getName(): string {
        return this.name;
    }

    getOrder(): number {
        return this.order;
    }

    getMoves(): Move[] {
        return this.moves;
    }

    getSpecies(): Specie | null {
        return this.species;
    }

    getSprites(): Sprites | null {
        return this.sprites;
    }

    getStats(): Stats[] {
        return this.stats;
    }

    getTypes(): Type[] {
        return this.types;
    }

    getWeight(): number {
        return this.weight;
    }

    setAbilities(abilities: Ability[]): void {
        this.abilities = abilities ? abilities.map((ability) => new Ability(ability)) : [];
    }

    setBaseExperience(base_experience: number): void {
        this.base_experience = base_experience ?? 0;
    }

    setCries(cries: Cries | null): void {
        this.cries = cries ?? null;
    }

    setForms(forms: Form[]): void {
        this.forms = forms ? forms.map((form) => new Form(form)) : [];
    }

    setHeight(height: number): void {
        this.height = height ?? 0;
    }

    setId(id: number): void {
        this.id = id ?? null;
    }

    setIsDefault(is_default: boolean): void {
        this.is_default = is_default ?? false;
    }

    setName(name: string): void {
        this.name = name ?? "";
    }

    setOrder(order: number): void {
        this.order = order ?? null;
    }

    setMoves(moves: Move[]): void {
        this.moves = moves ? moves.map((move) => new Move(move)) : [];
    }

    setSpecies(species: Specie | null): void {
        this.species = species ? new Specie(species) : null;
    }

    setSprites(sprites: Sprites | null): void {
        this.sprites = sprites ? new Sprites(sprites) : null;
    }

    setStats(stats: Stats[]): void {
        this.stats = stats ? stats.map((stat) => new Stats(stat)) : [];
    }

    setTypes(types: Type[]): void {
        this.types = types ? types.map((type) => new Type(type)) : [];
    }

    setWeight(weight: number): void {
        this.weight = weight ?? 0;
    }
}

class Ability extends BaseClass {
    constructor(data: typeof Ability.prototype) {
        super(data);
    }
}

class Cries {
    private latest: string;
    private legacy: string;

    constructor(data: typeof Cries.prototype) {
        this.latest = data.latest;
        this.legacy = data.legacy;
    }

    getLatest(): string {
        return this.latest;
    }

    getLegacy(): string {
        return this.legacy;
    }

    setLatest(latest: string): void {
        this.latest = latest;
    }

    setLegacy(legacy: string): void {
        this.legacy = legacy;
    }
}

class Form extends BaseClass {
    constructor(data: typeof Form.prototype) {
        super(data);
    }
}

class Move {
    private move!: BaseClass;

    constructor(data: typeof Move.prototype) {
        this.move = new BaseClass(data.move);
    }

    getMove(): BaseClass {
        return this.move;
    }

    setMove(move: BaseClass): void {
        this.move = move;
    }
}

class Specie extends BaseClass {
    constructor(data: typeof Specie.prototype) {
        super(data);
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

    constructor(data: typeof Sprites.prototype) {
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
        if(this.other.home?.front_default) return this.other.home.front_default;

        if(this.other['official-artwork']?.front_default) return this.other['official-artwork'].front_default
        
        return null;
    }

    getAllSpritesAvaible() {
        const images: any[] = [];
        if(this.front_default) images.push(this.front_default);
        if(this.back_default) images.push(this.back_default);
        if(this.front_shiny) images.push(this.front_shiny);
        if(this.back_shiny) images.push(this.back_shiny);
        if(this.other.dream_world?.front_default) images.push(this.other.dream_world.front_default);
        if(this.other['official-artwork']?.front_default) images.push(this.other['official-artwork'].front_default);
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

class Stats {
    private base_stat!: number;
    private effort!: number;
    private stat!: BaseClass;

    constructor(data: typeof Stats.prototype) {
        this.base_stat = data.base_stat;
        this.effort = data.effort;
        this.stat = new BaseClass(data.stat);
    }

    getBaseStat(): number {
        return this.base_stat;
    }

    getEffort(): number {
        return this.effort;
    }

    getStat(): BaseClass {
        return this.stat;
    }

    setBaseStat(base_stat: number): void {
        this.base_stat = base_stat;
    }

    setEffort(effort: number): void {
        this.effort = effort;
    }

    setStat(stat: BaseClass): void {
        this.stat = stat;
    }
}

class Type {
    private slot!: number;
    private type!: BaseClass;

    constructor(data: typeof Type.prototype) {
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