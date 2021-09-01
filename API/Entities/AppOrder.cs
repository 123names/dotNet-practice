namespace API.Entities
{
    public class AppOrder
    {
        public int Id { get; set; }

        public int userId { get; set; }
        public AppUser User { get; set; }

        public int productId { get; set; }
        public AppProduct Product{ get; set; }

        public int productQuantity { get; set; }
    }
}