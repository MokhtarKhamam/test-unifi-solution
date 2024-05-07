export interface BikeData {
    cycle_type_slug: string;
    date_stolen: number;
    description: string;
    external_id: null;
    frame_colors: string[];
    frame_model: string;
    id: number;
    is_stock_img: boolean;
    large_img: string;
    location_found: null;
    manufacturer_name: string;
    propulsion_type_slug: string;
    registry_name: null;
    registry_url: null;
    serial: string;
    status: string;
    stolen: boolean;
    stolen_coordinates: [number, number];
    stolen_location: string;
    thumb: string;
    title: string;
    url: string;
    year: number;
  }