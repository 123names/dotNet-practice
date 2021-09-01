namespace API.DTOs
{
    public class OrderItemDto
    {
        public int quantity { get; set; }
        public ProductDto product { get; set; }
    }
}