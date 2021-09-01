using System.Collections.Generic;

namespace API.Entities
{
    public class AppProduct
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }

        // navigation properties
        public List<AppOrder> Prod_User { get; set; }
    }
}