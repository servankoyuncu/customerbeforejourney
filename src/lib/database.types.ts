export interface ResolvePrepTokenRow {
  client_name: string;
  starts_at: string;
  location: string;
  advisor_name: string;
  advisor_initials: string;
  advisor_photo_url: string | null;
  advisor_role_label: string;
  advisor_experience: string;
  advisor_bio: string;
  advisor_brand_color: string | null;
  advisor_logo_url: string | null;
  last_screen: number;
}

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: {
      resolve_prep_token: {
        Args: { p_token: string };
        Returns: ResolvePrepTokenRow[];
      };
      update_prep_progress: {
        Args: { p_token: string; p_screen: number };
        Returns: void;
      };
      complete_prep_session: {
        Args: { p_token: string };
        Returns: void;
      };
      save_prep_response: {
        Args: { p_token: string; p_question_key: string; p_answer: string };
        Returns: void;
      };
      submit_lead: {
        Args: {
          p_first_name: string;
          p_last_name: string;
          p_phone: string;
          p_email: string;
          p_postal_code: string;
        };
        Returns: void;
      };
    };
  };
}
