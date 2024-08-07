export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      banners: {
        Row: {
          backgroundImage_url: string | null
          buttonName: string | null
          category_id: number | null
          created_at: string
          heading: string | null
          id: number
          redirectPath: string | null
          subCategory_id: number | null
          subHeading: string | null
        }
        Insert: {
          backgroundImage_url?: string | null
          buttonName?: string | null
          category_id?: number | null
          created_at?: string
          heading?: string | null
          id?: number
          redirectPath?: string | null
          subCategory_id?: number | null
          subHeading?: string | null
        }
        Update: {
          backgroundImage_url?: string | null
          buttonName?: string | null
          category_id?: number | null
          created_at?: string
          heading?: string | null
          id?: number
          redirectPath?: string | null
          subCategory_id?: number | null
          subHeading?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "banners_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "banners_subCategory_id_fkey"
            columns: ["subCategory_id"]
            isOneToOne: false
            referencedRelation: "subCategories"
            referencedColumns: ["id"]
          },
        ]
      }
      bids: {
        Row: {
          amount: number | null
          created_at: string | null
          id: string
          product_id: number | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id: string
          product_id?: number | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: string
          product_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bids_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bids_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      brands: {
        Row: {
          brand_image_url: string | null
          brand_name: string | null
          created_at: string | null
          id: number
        }
        Insert: {
          brand_image_url?: string | null
          brand_name?: string | null
          created_at?: string | null
          id: number
        }
        Update: {
          brand_image_url?: string | null
          brand_name?: string | null
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string | null
          id: number
          label: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          label?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          label?: string | null
        }
        Relationships: []
      }
      category_brands: {
        Row: {
          brand_id: number | null
          brand_name: string | null
          category_id: number | null
          category_label: string | null
          created_at: string
          id: number
        }
        Insert: {
          brand_id?: number | null
          brand_name?: string | null
          category_id?: number | null
          category_label?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          brand_id?: number | null
          brand_name?: string | null
          category_id?: number | null
          category_label?: string | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "category_brands_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_brands_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      group: {
        Row: {
          created_at: string | null
          group_name: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          group_name?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          group_name?: string | null
          id?: string
        }
        Relationships: []
      }
      popular_categories: {
        Row: {
          id: number
          image_url: string | null
          label: string | null
        }
        Insert: {
          id: number
          image_url?: string | null
          label?: string | null
        }
        Update: {
          id?: number
          image_url?: string | null
          label?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          id: number
          product_name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: never
          product_name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: never
          product_name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          body: string | null
          created_at: string | null
          id: number
          product_id: number | null
          rating: number | null
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: never
          product_id?: number | null
          rating?: number | null
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: never
          product_id?: number | null
          rating?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      specifics: {
        Row: {
          body: string | null
          created_at: string | null
          id: number
          label: string | null
          product_id: number
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: never
          label?: string | null
          product_id: number
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: never
          label?: string | null
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "specifics_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      subCategories: {
        Row: {
          category_id: number
          created_at: string
          id: number
          image_url: string | null
          label: string
        }
        Insert: {
          category_id: number
          created_at?: string
          id?: number
          image_url?: string | null
          label: string
        }
        Update: {
          category_id?: number
          created_at?: string
          id?: number
          image_url?: string | null
          label?: string
        }
        Relationships: [
          {
            foreignKeyName: "subCategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      custom_access_token_hook: {
        Args: {
          event: Json
        }
        Returns: Json
      }
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "admin" | "moderator"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
