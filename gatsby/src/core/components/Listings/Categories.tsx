import * as React from 'react'
import {
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material"
import {
  Font,
  Icon,
  useAllMarkdown,
  useCategories,
  usePwaDispatch,
  navigate,
} from "../../../core"

export default function Categories() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const categories = useCategories(allMarkdown)
  return <>
          {categories.length ? <>
            <List dense>
              {categories.map((doc: any, i: number) => {
                  const {
                    title,
                    icon,
                    slug,
                  } = doc
                  return <ListItemButton
                    key={`category_${i}`}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(navigate(slug, "_self"))
                    }}>
                    <ListItemIcon>
                      <Icon icon={icon} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                      primary={<Font variant="small">
                                {title}
                              </Font> }
                    />
                  </ListItemButton>
              })}       
            </List> 
          </> : null }
      </>
}


