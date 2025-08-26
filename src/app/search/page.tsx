import { SearchClient } from "@/features/productCatalog/components/SearchClient";
import { Container } from "@/shared/ui/atoms/Container";

export default async function SearchResultsPage() {
  return (
    <Container>
      <SearchClient />
    </Container>
  );
}
